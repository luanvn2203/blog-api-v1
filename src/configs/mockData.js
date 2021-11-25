const generateSampleCategories = () => {
    let listCategory = []
    for (let index = 0; index < 10; index++) {
        const category = {
            title: `Category ${index + 1}`,
            metaTitle: `This is meta title for category ${index + 1}`,
            slug: `This is slug  for category ${index + 1}`,
            content: `This is content for category ${index + 1}`
        }
        listCategory.push(category)
    }
    return listCategory

}

const generateSampleTag = () => {
    let listTag = []
    for (let index = 0; index < 10; index++) {
        const tag = {
            title: `Tag ${index + 1}`,
            metaTitle: `This is meta title for Tag ${index + 1}`,
            slug: `This is slug  for Tag ${index + 1}`,
            content: `This is content for Tag ${index + 1}`
        }
        listTag.push(tag)
    }
    return listTag
}

module.exports = {
    generateSampleCategories: generateSampleCategories,
    generateSampleTag: generateSampleTag
}