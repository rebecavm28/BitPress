interface News {
    id_noticia: number;
    tittle: string;
    imageUrl: string;
    content: string;
    date: Date;
    id_user?: number; 
}

export default News;