<script>
    import TodoMain from "../components/tasks/TodoMain.svelte";
    import Cookies from 'js-cookie';
    Cookies.set('testing', '123 If you\'re seeing this, then hello!');
</script>

<TodoMain />
