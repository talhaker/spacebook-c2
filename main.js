let posts = [];
let postId = 1;

let addPost = function(postText) {
    let post = {
        text: postText,
        id: postId
    };
    posts.push(post);
    postId++;
}

let renderPosts = function() {
    // Empty current content of posts list
    let postList = $('.posts');
    posts.empty();
    // Display updated beer list
    posts.forEach(function(post) {
        $('<p class="post" data-id="' + posts.id + '">' + posts.text + '</p>').appendTo(postList);
    });

}