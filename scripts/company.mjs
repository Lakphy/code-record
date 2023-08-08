import fs from "fs"
import readline from "readline"

let url = process.argv[process.argv.length - 1];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const company = () => {
    console.log(`
企业/第三方 题库录入
    `)
    rl.question(`\n请输入企业id：`, (company) => {
        rl.question(`\n请输入题目名称：`, (name) => {
            url = url.replace(/\/$/, ""); // 去除末尾的 /
            url = url.replace(/^(http|https):\/\//, "");
            const id = encodeURIComponent(url);
            const content = `\n- [${name}](${url})\n\n\t[前往代码 /${company}/${id}/index.js](./${company}/${id}/index.js)\n`
            const opt = {
                flag: 'a',
            }
            fs.mkdirSync(`${company}/${id}`);
            fs.writeFile(`${company}/${id}/index.js`, "", opt, (err) => {
                if (err) {
                    console.error(err)
                }
            })
            fs.writeFile(`${company}/${id}/README.md`, `# [${name}](${url})`, opt, (err) => {
                if (err) {
                    console.error(err)
                }
            })
            fs.writeFile(`${company}.md`, content, opt, (err) => {
                if (err) {
                    console.error(err)
                }
            })
            console.log(`\n成功创建新题目 【 ${name} 】\n\n`)
            console.log(`请前往 ./${company}/${id}/README.md 输入题目\n`)
            console.log(`请前往 ./${company}/${id}/index.js 输入代码\n`)
            rl.close();
        })
    })
}

company();

