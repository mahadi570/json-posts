fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => loadPosts(data))


function loadPosts(posts) {
    const postsContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="p-8 space-y-4 border-2 border-cyan-200 rounded-lg h-full">
            <h4 class="font-extrabold text-xl">Title: ${post.title}</h4>
            <h3 class="font-medium text-lg text-justify">${post.body}</h3>
            <h5 class="text-xs">Posted by User ${post.id}</h5>
        </div>`
        postsContainer.appendChild(div);
    }
}