import fs from "fs"
import readline from "readline"

const leetcodeUrl = process.argv[process.argv.length - 1];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const leetcodecn = () => {
    const temp = leetcodeUrl.replace("/description/", "");
    const id = leetcodeUrl.split("/")[leetcodeUrl.split("/").findIndex(item => item === "leetcode.cn") + 2];
    rl.question(`\n请输入题目名称：`, (name) => {
        const content = `\n- [${name}](${leetcodeUrl})\n\n\t[前往代码 /src/${id}.js](./src/${id}.js)\n`;
        const opt = {
            flag: 'a',
        }
        fs.writeFile(`src/${id}.js`, "", opt, (err) => {
            if (err) {
                console.error(err);
            }
        });
        fs.writeFile('leetcode.md', content, opt, (err) => {
            if (err) {
                console.error(err);
            }
        })
        console.log(`\n成功创建新题目 【 ${name} 】\n\n请前往 ./src/${id}.js 输入代码\n`)
        rl.close();
    })
}

const leetcode = () => { };

if (leetcodeUrl.includes("leetcode.cn")) leetcodecn();
else if (leetcodeUrl.includes("leetcode.com")) leetcode();
else console.log("请检查输入");

