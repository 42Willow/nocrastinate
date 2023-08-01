<script>
  import { Router, Route } from 'svelte-routing';
  import Intro from './pages/Intro.svelte';
  import Pomodoro from './pages/Pomodoro.svelte';
  import Tasks from './pages/Tasks.svelte';
  import Settings from './pages/Settings.svelte';
  import NotFound from './pages/NotFound.svelte';
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
</script>


<main class="bg-base-200 min-h-screen">
  <Router>
    <Navbar />

    <Route path="/nocrastinate/" component={Intro} />
    <Route path="/nocrastinate/tasks" component={Tasks} />
    <Route path="/nocrastinate/pomodoro" component={Pomodoro} />
    <Route path="/nocrastinate/settings" component={Settings} />
    <Route path="*" component={NotFound} />
  </Router>
</main>

<Footer />