var mineflayer = require('mineflayer')
const readline = require('readline');
const fs = require('fs');
var spammessage
var rownumber
var randomnumber
var delay = false
var kickcount = 0

if (process.argv.length < 5 || process.argv.length > 7) {
  console.log('Usage : AFK.js \x1b[31m<host>\x1b[0m')
  console.log('               \x1b[31m<port>\x1b[0m')
  console.log('               \x1b[31m<delay, delay in ms between each message>\x1b[0m')
  console.log('               \x1b[32m[<name, gmail in case the account is premium>]\x1b[0m')
  console.log('               \x1b[32m[<password, ignore in case the account is cracked>]\x1b[0m')
  console.log('')
  console.log('               \x1b[31mRed\x1b[0m: Needed, \x1b[32mGreen\x1b[0m: Optional')
  console.log('')
  console.log('               \x1b[36mExample: node SPAM.js localhost 25565 500 DrMoraschi\x1b[0m (this makes a cracked account bot')
  console.log('                                                                   that connects to localhost and sends\x1b[0m')
  console.log('                                                                   a message every 500 milliseconds)\x1b[0m')
  process.exit(1)
}

startBot()

const readInterface = readline.createInterface({
  input: fs.createReadStream('lines.txt'),
});

readInterface.on('line', function(line) {
  spammessage = line;
});

function startBot() {
  var bot = mineflayer.createBot({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[5] ? process.argv[5] : 'SPAMBot',
    password: process.argv[6]
  })
  
  process.argv[5] = delay

  bot.on('kicked', () =>
    setTimeout(() => {
      startBot()
    }, 2000)
  )

  bot.on('spawn', () => {
    function Start() {
      const nthline = require('nthline'),
          filePath = 'lines.txt',
          rowIndex = rownumber
      nthline(rowIndex, filePath).then(bot.chat)
    }
    setInterval(() => {
      var randomnumber = Math.floor(Math.random() * (count - 0 + 1)) + 0;
      rownumber = randomnumber
      Start()
    }, process.argv[4]);
  })

  bot.on('login', function() {
    bot.loadPlugin(require('mineflayer-dashboard'))
  })

  bot.on('kicked', () => {
    kickcount += 1
    bot.dashboard.log('\x1b[32m<STATUS>\x1b[0m \x1b[31mI got kicked. Kick count: '+`${kickcount}\x1b[0m`)
  })

  bot.on('login', () => {
    bot.dashboard.log('\x1b[32m<STATUS> Correctly logged in\x1b[0m')
  })

  var i;
  var count = 0;
  require('fs').createReadStream('lines.txt')
  .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) count++;
  })
  .on('end', function() {
    bot.once('login', () => {
      bot.dashboard.log('\x1b[32m<STATUS> Found '+`${count + 1} `+'phrases\x1b[0m');
    })
  });
}
