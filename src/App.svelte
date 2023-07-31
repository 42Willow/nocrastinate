<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Intro from './pages/Intro.svelte'
  import Pomodoro from './pages/Pomodoro.svelte'
  import NotFound from './pages/NotFound.svelte';
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
</script>


<main>
  <Router>
    <Navbar />

    <Route path="/nocrastinate/" component={Intro} />
    <Route path="/nocrastinate/pomodoro" component={Pomodoro} />
    <Route path="*" component={NotFound} />
  </Router>
</main>

<Footer />