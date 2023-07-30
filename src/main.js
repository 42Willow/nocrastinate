import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;

let counter = 100
setInterval(() => {
		if(counter>0){
			counter--
		}
    document.getElementById('counterElement').style.setProperty('--value', counter)
}, 1000)