export interface Products{
    id: number,
    Bote: string,
    Producto: string,
    Img: string,
    Tipo: string,
    Id_Tipo?: number
}

export interface Product{
    id: number,
    Tipo: string,
    Tipo_id: number,
    Bote: string,
    Producto: string,
    Img: string,
    Informacion: string,
    Adicional?: string
}

export interface Category{
    Tipo: string,
    Bote: number,
    Producto: string,
    Img: string,
    id: number
}

export interface Ideas{
    id: number,
    nombre: string,
    link: string,
    img: string
}