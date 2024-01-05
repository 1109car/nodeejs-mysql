import { pool } from "../db.js"


export const getEmployees =async(req,res)=>{
  try {
    const [rows]=await pool.query("SELECT * FROM empleo")
    res.json(rows)
  } catch (error) {
    return res.status(500).json("Algo salio mal")
  }
 
}

export const getEmployee =async(req,res)=>{

 try {
  const [rows] = await pool.query("SELECT * FROM empleo WHERE id = ?",[req.params.id])
 if (rows.length <=0) {
  return res.status(404).json({
    message:"Fallo al buscar"
  })
 }
 res.json(rows[0])
 } catch (error) {
  return res.status(500).json({
    message:"fallo"
  })
 }
}

export const createEmploye =async(req,res)=>{
  const {varon,textarea} =req.body
  try {
    const [rows]= await  pool.query("INSERT INTO empleo (varon,textarea) VALUES(?,?)",[varon,textarea])
    res.send({
      id:rows.insertId,
      varon,
      textarea
    })
  } catch (error) {
    return res.status(500).json({
      message:"fallo"})
    
}
}