if not Bot then
    Bot = {
        ["knowledge-bot"] = { Name = "Knowledge Bot", Description = "A bot that knows everything", sample = "EthMumbai kab hai?", json = json.encode() },
        ["weather-bot"] = { Name = "Weather Bot", Description = "Get You Weather from anywhere", sample = "Mumbai che havaaman kase aahe?" },
        ["crypto-bot"] = { Name = "Crypto Bot", Description = "Track your portfolio with in depth analysis", sample = "What's the price for Ethereum right now?" },

    }
end

local json = require('json')

Handlers.utils.hasMatchingTag('Action', 'Bot', function(msg)
    Send({
        Target = _0RBIT,
        Action = "Post-Real-Data",
        Url = "http://project-mh02.onrender.com/bot-message",
        Body = json.encode({
            botHandle = msg.Tags.Handle,
            message = msg.Tags.Message,
        })
    })
end)

-- _0RBIT = "FhSLmMjGDQrTYRZysLC6NasIVDQdxQ_kcBHsevdOnN4"
-- local json = require('json')
-- Send({
--   Target = _0RBIT,
--   Action = "Post-Real-Data",
--   Url = "http://project-mh02.onrender.com/bot-message",
--   Body = json.encode({
--       botHandle = "@knowledge-bot",
--       message = "2024 mein Defi Kaisa rhega?",
--   })
-- })


Handlers.utils.hasMatchingTag('Action', 'Receive-data-feed', function(msg)
    local data = json.decode(msg.Tags.Data)
    msg.Tags.Action = "Chat"
    table.insert(Inbox, msg)
    
end)


Handlers.utils.hasMatchingTag('Action', 'GetBots', function(msg)
    Send({
        Target = msg.From,
        Tags = {
            Data = json.encode(Bot)
        }
    })
end)



Handlers.utils.hasMatchingTag('Action', 'AddBot', function(msg)
    local bot = msg.Tags.Bot
    if not Bot[bot] then
        Bot[bot] = true
        Send({
            Target = msg.From,
            Tags = {
                Success = true
            }
        })
    else
        Send({
            Target = msg.From,
            Tags = {
                Success = false
            }
        })
    end
end)
