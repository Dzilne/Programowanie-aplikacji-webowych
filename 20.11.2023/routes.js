
const express = require('express');

const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
  getTags,
  getTag,
  createTag,
  updateTag,
  deleteTag,
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('./controllers');

// Define routes for User
router.get('/users', getUsers); 
router.get('/users/:id', getUser); 
router.post('/users', createUser); 
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser); 


router.get('/posts', getPosts); 
router.get('/posts/:id', getPost); 
router.post('/posts', createPost);
router.put('/posts/:id', updatePost); 
router.delete('/posts/:id', deletePost); 

router.get('/comments', getComments); 
router.get('/comments/:id', getComment); 
router.post('/comments', createComment); 
router.put('/comments/:id', updateComment); 
router.delete('/comments/:id', deleteComment); 


router.get('/tags', getTags); 
router.get('/tags/:id', getTag); 
router.post('/tags', createTag); 
router.put('/tags/:id', updateTag); 
router.delete('/tags/:id', deleteTag); 


router.get('/categories', getCategories); 
router.get('/categories/:id', getCategory); 
router.post('/categories', createCategory); 
router.put('/categories/:id', updateCategory); 
router.delete('/categories/:id', deleteCategory); 


module.exports = router;
