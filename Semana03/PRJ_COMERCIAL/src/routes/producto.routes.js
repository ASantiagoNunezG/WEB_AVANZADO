import { Router } from "express";

const router = Router();


//Listado

router.get('/lista-productos', async(req, res)=>{
    try{
        res.render('productos/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/agregar-producto', (req,res)=>{
    res.render('productos/add');
});

router.post('/agregar-producto', async(req, res)=>{
    try{
    
        res.redirect('/lista-productos?message=Producto agregado exitosamente');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/editar-producto', (req,res)=>{
    res.render('productos/edit');
});

router.post('/editar-producto', async(req, res)=>{
    try{
    
        res.redirect('/lista-productos?message=Producto actualizado exitosamente');
    }
    catch(err){

        res.status(500).json({message:err.message});
    }
});




export default router;