const express = require('express');
const router = express.Router();

const person = require('./../models/person');

router.post('/',async(req, res)=>{
    try{
         const data = req.body

         const newperson = new person(data);

         //save the new person to the database
         const response = await newperson.save();
         console.log('data saved ho gya betu');
         res.status(200).json(response);

    }catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error hai betu'});
    }
})

router.get('/:workType', async (req,res)=>{
    try{
         const workType = req.params.workType; // extract the worktype from url parameter
         if(workType =='chef'|| workType == 'manager' || workType =='waiter'){
              const response = await person.find({work: workType});
              console.log('response fetched');
              res.status(200).json(response);
         }else{
              res.status(404).json({error: 'invalid work type'});
         }

    }catch(err){
       console.log(err);
         res.status(500).json({error:'internal server error'}) ; 
    }
})


router.put('/:id',async(req,res)=>{
     try{
          const personId = req.params.id;
          const updatedPersonData = req.body;

          const response = await person.findByIdAndUpdate(personId, updatedPersonData,{
               new: true,
               runValidators: true,
          })
          if(!response){
               return res.status(404).json({error:'person not found'});
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
          const personId = req.params.id;

          // assuming you have person model
          const response= await person.findByIdAndDelete(personId);
          if(!response){
               return res.status(404).json({error:'person not found'});
          }
          console.log('data deleted');
          res.status(200).json(response);

     }catch(err){
          console.log(err);
          res.status(500).json({error:'internal server error'});
     }
})
module.exports = router;
