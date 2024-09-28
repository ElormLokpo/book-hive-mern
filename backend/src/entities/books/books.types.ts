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

  export enum BookStatusEnum{
    Available = "Available",
    BorrowedOut = "Borrowed Out"
  }
  
  export interface IBook{
    title:string, 
    author?:string, 
    isbn?:string, 
    location?:string, 
    total_copies?: number,
    copies_borrowed?:number,
    current_copies?: number,
    status?: string,
    categories?: string[]
  }