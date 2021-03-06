import { SlashCommandBuilder } from "@discordjs/builders";
import { Bot, Command } from "../types";

module.exports = new Command(
  new SlashCommandBuilder().setName("exit").setDescription("종료"),
  async (message: string[], bot: Bot) => {
    await Promise.all(
      bot.player.queue.map((queue) => {
        queue.connection.disconnect();
        queue.connection.destroy();
        queue.audioPlayer.stop();
        return;
      })
    );
    process.exit();
  }
);
