<script>
    import { Peer } from "peerjs";
    import { onMount } from "svelte";

    let peer;

    onMount(() => {
        document.querySelector("#send").addEventListener("click", () => {
            const sendButton = document.getElementById("send-button");
            const sendMessageBox = document.getElementById("send-message-box");
            const clearMsgsButton = document.getElementById("clear-messages");
            const connectButton = document.getElementById("connect-button");
            const recvIdInput = document.getElementById("peer-id");
            let lastPeerId = null;
            let peer = null; // own peer object
            let conn = null;

            function initialize() {
                // Create own peer object with connection to shared PeerJS server
                peer = new Peer(null, {
                    debug: 2
                });

                peer.on('open', function (id) {
                    // Workaround for peer.reconnect deleting previous id
                    if (peer.id === null) {
                        console.log('Received null id from peer open');
                        peer.id = lastPeerId;
                    } else {
                        lastPeerId = peer.id;
                    }

                    console.log('ID: ' + peer.id);
                });

                peer.on('connection', function (c) {
                    // Disallow incoming connections
                    c.on('open', function() {
                        c.send("Sender does not accept incoming connections");
                        setTimeout(function() { c.close(); }, 500);
                    });
                });
                peer.on('disconnected', function () {
                    // status.innerHTML = "Connection lost. Please reconnect";
                    console.log('Connection lost. Please reconnect');

                    // Workaround for peer.reconnect deleting previous id
                    peer.id = lastPeerId;
                    peer._lastServerId = lastPeerId;
                    peer.reconnect();
                });
                peer.on('close', function() {
                    // conn = null;
                    // status.innerHTML = "Connection destroyed. Please refresh";
                    console.log('Connection destroyed');
                });
                peer.on('error', function (err) {
                    console.log(err);
                    alert('' + err);
                });
                };

                function join() {
                // Close old connection
                if (conn) {
                    conn.close();
                }

                // Create connection to destination peer specified in the input field
                conn = peer.connect(recvIdInput.value, {
                    reliable: true
                });

                conn.on('open', function () {
                    // status.innerHTML = "Connected to: " + conn.peer;
                    console.log("Connected to: " + conn.peer);

                    // Check URL params for comamnds that should be sent immediately
                    var command = getUrlParam("command");
                    if (command)
                        conn.send(command);
                });
                // Handle incoming data (messages only since this is the signal sender)
                conn.on('data', function (data) {
                    // addMessage("<span class=\"peerMsg\">Peer:</span> " + data);
                });
                conn.on('close', function () {
                    // status.innerHTML = "Connection closed";
                    console.log("Connection closed");
                });
            };
            function getUrlParam(name) {
                name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                var regexS = "[\\?&]" + name + "=([^&#]*)";
                var regex = new RegExp(regexS);
                var results = regex.exec(window.location.href);
                if (results == null)
                    return null;
                else
                    return results[1];
            };
            function signal(sigName) {
                if (conn && conn.open) {
                    conn.send(sigName);
                    console.log(sigName + " signal sent");
                    // addMessage(cueString + sigName);
                } else {
                    console.log('Connection is closed');
                }
            }

            // goButton.addEventListener('click', function () {
            //     signal("Go");
            // });
            // resetButton.addEventListener('click', function () {
            //     signal("Reset");
            // });
            // fadeButton.addEventListener('click', function () {
            //     signal("Fade");
            // });
            // offButton.addEventListener('click', function () {
            //     signal("Off");
            // });

            // function addMessage(msg) {
            //     var now = new Date();
            //     var h = now.getHours();
            //     var m = addZero(now.getMinutes());
            //     var s = addZero(now.getSeconds());

            //     if (h > 12)
            //         h -= 12;
            //     else if (h === 0)
            //         h = 12;

            //     function addZero(t) {
            //         if (t < 10)
            //             t = "0" + t;
            //         return t;
            //     };

            //     message.innerHTML = "<br><span class=\"msg-time\">" + h + ":" + m + ":" + s + "</span>  -  " + msg + message.innerHTML;
            // };

            function clearMessages() {
                message.innerHTML = "";
                // addMessage("Msgs cleared");
            };

            // Listen for enter in message box
            sendMessageBox.addEventListener('keypress', function (e) {
                var event = e || window.event;
                var char = event.which || event.keyCode;
                if (char == '13')
                    sendButton.click();
            });
            // Send message
            sendButton.addEventListener('click', function () {
                if (conn && conn.open) {
                    var msg = sendMessageBox.value;
                    sendMessageBox.value = "";
                    conn.send(msg);
                    console.log("Sent: " + msg);
                    // addMessage("<span class=\"selfMsg\">Self: </span> " + msg);
                } else {
                    console.log('Connection is closed');
                }
            });

            // Clear messages box
            clearMsgsButton.addEventListener('click', clearMessages);
            // Start peer connection on click
            connectButton.addEventListener('click', join);

            // Since all our callbacks are setup, start the process of obtaining an ID
            initialize();
        });
        document.querySelector("#openrecv").addEventListener("click", () => {
            peer = new Peer("testing42willows");
            peer.on("open", (id) => {
                console.log("My peer ID is:", id);
            });

            peer.on("connection", (conn) => {
                console.log("Incoming connection from peer:", conn.peer);

                conn.on("data", (data) => {
                    console.log("Received data:", data);
                });

                conn.on("close", () => {
                    console.log("Connection closed");
                });
            });
        });
    });
</script>


<!-- button to send to willow-test-recv -->
<!-- input for peer ID to send to -->
<h2 class="text-3xl font-bold m-4">P2P BETA testing</h2>
<h3 class="text-2xl font-bold m-4">Recieve</h3>
<button id="openrecv" class="btn btn-secondary m-4">Open Recv</button>

<h3 class="text-2xl font-bold m-4">Send</h3>
<button id="send" class="btn btn-secondary m-4">Open Send</button>
<br>

<div class="join m-4">
    <input id="peer-id" type="text" placeholder="Peer ID" class="input w-full max-w-xs join-item input-bordered" />
    <button id="connect-button" class="btn join-item btn-primary">Connect</button>
</div>
<div class="join m-4">
    <input id="send-message-box" type="text" placeholder="Message" class="input w-full max-w-xs join-item input-bordered" />
    <button id="send-button" class="btn join-item btn-primary">Send</button>
</div>
<button class="btn btn-primary" id="clear-messages">Clear Messages</button>