import { Router } from "express";

const router = Router();


//Listado de categorías

router.get('/lista-categorias', async(req, res)=>{
    try{
        res.render('categorias/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//AÑADIR

router.get('/agregar-categoria', (req, res)=>{
    res.render('categorias/add');
});

router.post('/agregar-categoria', async(req, res)=>{
    try{
        res.redirect('/lista-categorias?message=Categoría agregada exitosamente')
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

//actualizar

router.get('/editar-categoria', (req,res)=>{
    res.render('categorias/edit');
});

router.post('/editar-categoria', async(req, res)=>{
    try{
        
        res.redirect('/lista-categorias?message=Categoría actualizada correctamente');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});


export default router;