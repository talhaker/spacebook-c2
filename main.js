let posts = [];
let postId = 1;

let addPost = function(postText) {
    let post = {
        text: postText,
        id: postId,
        comments: []
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
        // Add a div to associate comments with post
        $('<div class="post"> \
        <p data-id="' + post.id + '"> <button type="button" class="remove">REMOVE</button> ' + post.text + '</p> \
        <form><div class="form-group"><input type="text" id="user-name" class="form-control" placeholder="Username"> \
        <input type="text" id="comment" class="form-control" placeholder="Comment text"></div> \
        <button class = "btn btn-primary add-comment" type = "button" >Comment</button> </form> \
        </div>').appendTo(postList);
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