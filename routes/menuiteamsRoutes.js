const express = require('express');
const router = express.Router();

const menuiteams = require( './../models/menuiteams');

router.post('/', async(req, res)=>{
    try{
         const data = req.body
         const newnenu =  new menuiteams(data);

         const response = await newnenu.save();
         console.log("data saved");
         res.status(200).json(response);

    }
    catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error'});
    }
})

//Get method to get the menu iteams 
router.get('/:taste', async(req, res)=>{
    try{
         const taste =req.params.taste;
         if(taste == 'sweet'|| taste == 'spicy'|| taste == 'sour'){
          const response = await menuiteams.find({taste : taste});
          console.log('response save ho gya');
          res.status(200).json(response);
         }else{
          res.status(404).json({error:'invalid taste type'});
         }
    }catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error'})
    }
})

router.put('/:id',async(req,res)=>{
     try{
          const menuId = req.params.id;
          const updatedmenudata = req.body;

          const response = await menuiteams.findByIdAndUpdate(menuId ,updatedmenudata,{
               new:true,
               runValidators:true,
          })
          if(!response){
               return res.status(404).json({error:'menu not found'});
          }
          console.log('data updated');
          res.status(200).json(response);
     }catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error'});
     }
})

router.delete('/:id',async(req,res)=>{
     try{
          const menuId = req.params.id;

          const response =  await menuiteams.findByIdAndDelete(menuId);
          if(!response){
               return res.status(404).json({error:'menu  not found'});
          }
          console.log('menu delted');
          res.status(200).json(response);

     }catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error'});
     }
})

module.exports = router;
