const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations, a user can make many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
});

// create reverse association, a post can belong to ONE user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// many-to-many associations, allowing both the User and Post
// models to query each other's information in the context of a vote
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id',
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
});

Vote.belongsTo(User, {
    foreignKey: 'user_id',
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Vote, {
    foreignKey: 'user_id',
});

Post.hasMany(Vote, {
    foreignKey: 'post_id',
});

// Note that we don't have to specify Comment as a through table 
// like we did for Vote. This is because we don't need to access 
// Post through Comment; we just want to see the user's comment and 
// which post it was for. Thus, the query will be slightly different.
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Vote, Comment };
