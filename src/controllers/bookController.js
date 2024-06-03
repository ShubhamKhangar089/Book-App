import { bookModel } from "../models/bookModel.js";

//get all books run when login as admin to sell all users book
export const getAllBooks = async(req,res) =>{
    try {
        const getBooks = await bookModel.find();
        res.status(200).json({success : true, Books : getBooks });
    } catch (error) {
    console.log("error while getBooks :", error.message);
    res.status(500).json({message : " error while getBooks"}) 
    }
}

//get users specific-created books 
export const getBookById = async(req,res) =>{
    try {
        const book = await bookModel.find({ userId: req.params.userId });
        res.status(200).json({book : book});
      } catch (error) {
          console.log("error :", error.message);
          res.status(500).json({message : "error while making getBookById request"})
      }
}

//create new book
export const createBook = async(req,res)=>{
  const {title, author , frontPageUrl, backPageUrl,pages,userId } = req.body
 
  try{
    const createBook = new bookModel({title,author,frontPageUrl,backPageUrl,pages,userId})
    await createBook.save();
    console.log("successfully created book");
    res.status(201).json({message :"Book created successfully" , books : createBook})

  }catch (error){
    console.log("error while creating new book :", error.message);
    res.status(500).json({message : " error while creating new book"})
  }
}

//patch
export const updateBook = async(req,res)=>{
    try {
        const book =  await bookModel.findByIdAndUpdate(req.params.id , req.body);
        res.status(201).json({message : "book updated successfully",book : book})
    } catch (error) {
        console.log("error :", error.message);
        res.status(500).json({message : "error while making update book request"})
    }
}


//delete
export const deleteBook = async(req,res)=>{
    try {
        const book =  await bookModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "book data deleted successfully"})
    } catch (error) {
        console.log("error :", error.message);
        res.status(500).json({message : "error while making delete book request"})
    }
}