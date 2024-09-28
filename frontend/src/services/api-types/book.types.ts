export enum BookCategoryEnum {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Science = "Science",
    History = "History",
    Biography = "Biography",
    Fantasy = "Fantasy",
    Mystery = "Mystery",
    Romance = "Romance",
    Technology = "Technology",
    Art = "Art",
  }
  
export interface IBookReduxState{
  value:{
      all_books: any[]
  }
}

export interface IBookRequest{
  title:string, 
  author?:string, 
  isbn?:string, 
  location?:string, 
  total_copies?: number,
  categories?: string[]
}