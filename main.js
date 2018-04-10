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
    postList.empty();
    // Display updated beer list
    posts.forEach(function(post) {
        $('<p class="post" data-id="' + post.id + '"> <button type="button" class="remove">REMOVE</button> ' + post.text + '</p>').appendTo(postList);
    });

}

let postHandler = function() {
    let text = $('.form-control').val();
    addPost(text);
    renderPosts();
}


$('.add-post').click(postHandler);
$('.posts').on('click', '.post', function() {
    $(this).remove();
});