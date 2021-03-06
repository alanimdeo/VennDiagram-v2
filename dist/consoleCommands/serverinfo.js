"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const types_1 = require("../types");
module.exports = new types_1.Command(new builders_1.SlashCommandBuilder().setName("serverinfo").setDescription("서버 정보"), async (message, bot) => {
    try {
        if (message.length === 0)
            return "서버 ID를 입력해주세요.";
        let guild = await bot.guilds.fetch(message[0]);
        return guild;
    }
    catch (err) {
        if (err instanceof Error) {
            if (err.message === "Missing Access")
                return "오류: 서버가 없거나 서버 정보를 불러올 권한이 부족합니다.";
            else if (err.message.startsWith("Invalid Form Body"))
                return "오류: 잘못된 서버 ID입니다.";
            else
                return err.message;
        }
        return err;
    }
});
