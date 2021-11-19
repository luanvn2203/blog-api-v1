
let configRelationShip = (db) => {
    //one user have many post
    db.users.hasMany(db.posts)
    db.posts.belongsTo(db.users, { foreignKey: 'authorId' })

    //one category has many post_category
    db.categories.hasMany(db.postCategories)
    db.postCategories.belongsTo(db.categories, { foreignKey: 'categoryId' })

    //one post have many post_category
    db.posts.hasMany(db.postCategories)
    db.postCategories.belongsTo(db.posts, { foreignKey: 'postId' })

    //tag has many post_tag
    db.tags.hasMany(db.postTags)
    db.postTags.belongsTo(db.tags, { foreignKey: 'tagId' })

    //post has many post_tag
    db.posts.hasMany(db.postTags)
    db.postTags.belongsTo(db.posts, { foreignKey: 'postId' })
}

module.exports = {
    configRelationShip: configRelationShip
}