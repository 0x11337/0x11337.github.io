document.addEventListener('DOMContentLoaded', function() {
    // Load blog posts from JSON
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            data.forEach(post => {
                const blogPost = document.createElement('div');
                blogPost.className = 'blog-post';
                blogPost.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.summary}</p>
                    <a href="#" onclick="showPost('${post.title}'); return false;">Read More</a>
                `;
                blogList.appendChild(blogPost);
            });
        });
});

function showPost(title) {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const post = data.find(p => p.title === title);
            if (post) {
                const modal = document.getElementById('post-modal');
                const modalBody = document.getElementById('modal-body');
                modalBody.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                `;
                modal.style.display = 'block';
            }
        });
}

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    document.getElementById('post-modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === document.getElementById('post-modal')) {
        document.getElementById('post-modal').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Load blog posts from JSON
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            data.blog.forEach(post => {
                const blogPost = document.createElement('div');
                blogPost.className = 'blog-post';
                blogPost.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.summary}</p>
                    <a href="#" onclick="showPost('${post.title}'); return false;">Read More</a>
                `;
                blogList.appendChild(blogPost);
            });
        });

    // Load files from JSON
    fetch('files.json')
        .then(response => response.json())
        .then(data => {
            const filesList = document.getElementById('files-list');
            data.files.forEach(file => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.innerHTML = `
                    <h3>${file.title}</h3>
                    <p>${file.description}</p>
                    <a href="${file.downloadLink}" download>Download</a>
                `;
                filesList.appendChild(fileItem);
            });
        });
});

// Show blog post in modal
function showPost(title) {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const post = data.blog.find(p => p.title === title);
            if (post) {
                const modalBody = document.getElementById('modal-body');
                modalBody.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `;
                document.getElementById('post-modal').style.display = 'block';
            }
        });
}

// Close modal when clicking on the close button
document.querySelector('.modal .close').addEventListener('click', function() {
    document.getElementById('post-modal').style.display = 'none';
});

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === document.getElementById('post-modal')) {
        document.getElementById('post-modal').style.display = 'none';
    }
};