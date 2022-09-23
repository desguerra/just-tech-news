const User = require('./User');
const Post = require('./Post');

// create associations, a user can make many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// create reverse association, a post can belong to ONE user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };