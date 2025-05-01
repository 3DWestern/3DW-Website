const register = async(req, res) => {
    const{inputInfo} = req.body;
    try{
        //res.status(200).json({ message: "Hello World!" });
    } catch (error) {
        //res.status(500).json({ message: `Internal Server Error: ${error.message}`})
    }
}

const login = async(req, res) => {
    const{inputInfo} = req.body;
    try{
        //console.log(inputInfo);
        //res.status(200).json({ message: "Hello World!" });
    } catch (error) {
        //res.status(500).json({ message: `Internal Server Error: ${error.message}`})
    }
}

const logout = async(req, res) => {
    const{inputInfo} = req.body;
    try{
        //console.log(inputInfo);
        //res.status(200).json({ message: "Hello World!" });
    } catch (error) {
        //res.status(500).json({ message: `Internal Server Error: ${error.message}`})
    }
}

module.exports = {
    register,
    login,
    logout
}