<template>
	<main id="profile-container">
		<h1>About me</h1>

		<h3>
			<p>A beginner and student programmer.</p>
			<p>Sometimes I also send pull requests.</p>
			<p>Recently, I've been working on Japanese translations for Android apps.</p>
		</h3>

		<h1>Skills</h1>
		
		<h3>
			<p>Nothing here!</p>
			<p>There is a possibility that it will increase this year.</p>
		</h3>

		<h1>Studying now...</h1>
		<img class="logo" src="./assets/HTML5-logo.svg" width="75" height="75" alt="HTML5 logo" />
		<img class="logo" src="./assets/CSS3-logo.svg" width="75" height="75" alt="CSS logo" />
		<img class="logo" src="./assets/JavaScript-logo.svg" width="75" height="75" alt="JavaScript logo" />
		<img class="logo" src="./assets/Vue-logo.svg" width="75" height="75" alt="Vue.js logo" />
		<img class="logo" src="./assets/Java-logo.svg" width="75" height="75" alt="Java logo" />
		<img class="logo" src="./assets/Kotlin-logo.svg" width="75" height="75" alt="Kotlin logo" />
		
		<h1>Links</h1>
		<a href="https://www.instagram.com/bnfnt8aqws64tsfurjhukkgtvmx6uh/" target="_blank">
			<img class="logo" src="./assets/Instagram-logo.svg" width="75" height="75"  alt="Instagram logo" />
		</a>
		<a href="https://x.com/dZ1ytwQAqUyCT9" target="_blank">
			<img class="logo" src="./assets/X-logo.svg" width="75" height="75"  alt="X logo" />
		</a>
		<a href="https://hosted.weblate.org/user/noim/" target="_blank">
			<img class="logo" src="./assets/Weblate-logo.svg" width="75" height="75"  alt="Hosted Weblate logo" />
		</a>
		<a href="https://github.com/noimzip" target="_blank">
			<img class="logo" src="./assets/GitHub-logo.svg" width="75" height="75"  alt="GitHub logo" />
		</a>
		<a href="https://t.me/noimzip" target="_blank">
			<img class="logo" src="./assets/Telegram-logo.svg" width="75" height="75"  alt="Telegram logo" />
		</a>
		<a href="https://gitlab.com/noimzip" target="_blank">
			<img class="logo" src="./assets/GitLab-logo.svg" width="75" height="75"  alt="GitLab logo" />
		</a>
	</main>
</template>

<style scoped>
img {
	margin: 15px;
}

.logo {
  will-change: filter;
  transition: filter 250ms;
}

.logo:hover {
  filter: drop-shadow(0 0 0.5em #fff);
}
</style>