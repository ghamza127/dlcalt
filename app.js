module.exports = {
    name: "Deep-Live-Cam",
    description: "Face-swap app",
    commands: [
        {
            name: "Setup Environment",
            run: async () => {
                const { exec } = require('child_process');
                exec('python -m venv deeplive_env && .\\deeplive_env\\Scripts\\activate && pip install --upgrade pip && pip install -r requirements.txt && pip uninstall -y onnxruntime && pip install onnxruntime-gpu==1.16.3', (err, stdout, stderr) => {
                    if(err) console.error(err);
                    else console.log(stdout);
                });
            }
        },
        {
            name: "Create Models Folder",
            run: async () => {
                const fs = require('fs');
                if(!fs.existsSync('models')) fs.mkdirSync('models');
            }
        },
        {
            name: "Run Deep-Live-Cam",
            run: async () => {
                const { exec } = require('child_process');
                exec('.\\deeplive_env\\Scripts\\activate && python app.py', (err, stdout, stderr) => {
                    if(err) console.error(err);
                    else console.log(stdout);
                });
            }
        }
    ]
};
