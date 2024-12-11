import jwt from 'jsonwebtoken'


// Below codes are not working. 

// const authDoctor = async (req, res, next) => {
//     try {

//         const {dtoken} = req.headers
//         if (!dtoken) {
//             return res.json({success:false,message:'Not Authorized Login Again'})
//         }
//         const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
//         req.body.docId = token_decode.docId
//         next()


//     } catch (error) {
//         console.log(error)
//         res.json({success:false, message:error.message})
//     }
// }


// Below codes are updated & working ones. 

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    const { dtoken } = req.headers
    if (!dtoken) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.body.docId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor;