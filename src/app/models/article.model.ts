export interface Article {
  _id: string;
  title: string;
  content?: string;
  date: string;
  author?: string;
}


export interface ArticleDetail extends Article{
    authorDetails:{
        _id:string;
        name:string;
    }
}
