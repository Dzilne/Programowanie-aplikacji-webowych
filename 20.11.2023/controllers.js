const prisma = require(‘./prisma’);

const getUsers = async (req, res) => { try { const users = await prisma.user.findMany({ include: { posts: true, comments: true }, }); res.json(users); } catch (error) { res.status(500).json({ error: error.message }); } };

const getUser = async (req, res) => { try { const { id } = req.params; const user = await prisma.user.findUnique({ where: { id: Number(id) }, include: { posts: true, comments: true }, }); if (user) { res.json(user); } else { res.status(404).json({ error: ‘User not found’ }); } } catch (error) { res.status(500).json({ error: error.message }); } };

const createUser = async (req, res) => { try { const { name, email, password } = req.body; const user = await prisma.user.create({ data: { name, email, password }, }); res.json(user); } catch (error) { res.status(500).json({ error: error.message }); } };

const updateUser = async (req, res) => { try { const { id } = req.params; const { name, email, password } = req.body; const user = await prisma.user.update({ where: { id: Number(id) }, data: { name, email, password }, }); res.json(user); } catch (error) { res.status(500).json({ error: error.message }); } };

const deleteUser = async (req, res) => { try { const { id } = req.params; const user = await prisma.user.delete({ where: { id: Number(id) }, }); res.json(user); } catch (error) { res.status(500).json({ error: error.message }); } };

const getPosts = async (req, res) => { try { const posts = await prisma.post.findMany({ include: { author: true, comments: true, tags: true, category: true }, }); res.json(posts); } catch (error) { res.status(500).json({ error: error.message }); } };

const getPost = async (req, res) => { try { const { id } = req.params; const post = await prisma.post.findUnique({ where: { id: Number(id) }, include: { author: true, comments: true, tags: true, category: true }, }); if (post) { res.json(post); } else { res.status(404).json({ error: ‘Post not found’ }); } } catch (error) { res.status(500).json({ error: error.message }); } };

const createPost = async (req, res) => { try { const { title, content, authorId, tags, category } = req.body; const post = await prisma.post.create({ data: { title, content, author: { connect: { id: authorId } }, tags: { connect: tags }, category: { connect: category }, }, }); res.json(post); } catch (error) { res.status(500).json({ error: error.message }); } };

const updatePost = async (req, res) => { try { const { id } = req.params; const { title, content, authorId, tags, category } = req.body; const post = await prisma.post.update({ where: { id: Number(id) }, data: { title, content, author: { connect: { id: authorId } }, tags: { set: tags }, category: { connect: category }, }, }); res.json(post); } catch (error) { res.status(500).json({ error: error.message }); } };

const deletePost = async (req, res) => { try { const { id } = req.params; const post = await prisma.post.delete({ where: { id: Number(id) }, }); res.json(post); } catch (error) { res.status(500).json({ error: error.message }); } };

const getComments = async (req, res) => { try { const comments = await prisma.comment.findMany({ include: { author: true, post: true }, }); res.json(comments); } catch (error) { res.status(500).json({ error: error.message }); } };

const getComment = async (req, res) => { try { const { id } = req.params; const comment = await prisma.comment.findUnique({ where: { id: Number(id) }, include: { author: true, post: true }, }); if (comment) { res.json(comment); } else { res.status(404).json({ error: ‘Comment not found’ }); } } catch (error) { res.status(500).json({ error: error.message }); } };

const createComment = async (req, res) => { try { const { content, authorId, postId } = req.body; const comment = await prisma.comment.create({ data: { content, author: { connect: { id: authorId } }, post: { connect: { id: postId } }, }, }); res.json(comment); } catch (error) { res.status(500).json({ error: error.message }); } };

const updateComment = async (req, res) => { try { const { id } = req.params; const { content, authorId, postId } = req.body; const comment = await prisma.comment.update({ where: { id: Number(id) }, data: { content, author: { connect: { id: authorId } }, post: { connect: { id: postId } }, }, }); res.json(comment); } catch (error) { res.status(500).json({ error: error.message }); } };

const deleteComment = async (req, res) => { try { const { id } = req.params; const comment = await prisma.comment.delete({ where: { id: Number(id) }, }); res.json(comment); } catch (error) { res.status(500).json({ error: error.message }); } };

const getTags = async (req, res) => { try { const tags = await prisma.tag.findMany({ include: { posts: true }, }); res.json(tags); } catch (error) { res.status(500).json({ error: error.message }); } };

const getTag = async (req, res) => { try { const { id } = req.params; const tag = await prisma.tag.findUnique({ where: { id: Number(id) }, include: { posts: true }, }); if (tag) { res.json(tag); } else { res.status(404).json({ error: ‘Tag not found’ }); } } catch (error) { res.status(500).json({ error: error.message }); } };

const createTag = async (req, res) => { try { const { name } = req.body; const tag = await prisma.tag.create({ data: { name }, }); res.json(tag); } catch (error) { res.status(500).json({ error: error.message }); } };

const updateTag = async (req, res) => { try { const { id } = req.params; const { name } = req.body; const tag = await prisma.tag.update({ where: { id: Number(id) }, data: { name }, }); res.json(tag); } catch (error) { res.status(500).json({ error: error.message }); } };

const deleteTag = async (req, res) => { try { const { id } = req.params; const tag = await prisma.tag.delete({ where: { id: Number(id) }, }); res.json(tag); } catch (error) { res.status(500).json({ error: error.message }); } };

const getCategories = async (req, res) => { try { const categories = await prisma.category.findMany({ include: { posts: true }, }); res.json(categories); } catch (error) { res.status(500).json({ error: error.message }); } };

const getCategory = async (req, res) => { try { const { id } = req.params; const category = await prisma.category.findUnique({ where: { id: Number(id) }, include: { posts: true }, }); if (category) { res.json(category); } else { res.status(404).json({ error: ‘Category not found’ }); } } catch (error) { res.status(500).json({ error: error.message }); } };


const createCategory = async (req, res) => { try { const { name } = req.body; const category = await prisma.category.create({ data: { name }, }); res.json(category); } catch (error) { res.status(500).json({ error: error.message }); } };


const updateCategory = async (req, res) => { try { const { id } = req.params; const { name } = req.body; const category = await prisma.category.update({ where: { id: Number(id) }, data: { name }, }); res.json(category); } catch (error) { res.status(500).json({ error: error.message }); } };


const deleteCategory = async (req, res) => { try { const { id } = req.params; const category = await prisma.category.delete({ where: { id: Number(id) }, }); res.json(category); } catch (error) { res.status(500).json({ error: error.message }); } };


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, getPosts, getPost, createPost, updatePost, deletePost, getComments, getComment, createComment, updateComment, deleteComment, getTags, getTag, createTag, updateTag, deleteTag, getCategories, getCategory, createCategory, updateCategory, deleteCategory, };

