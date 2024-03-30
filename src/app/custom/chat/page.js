"use client";
import { useState } from "react";
import { AiOutlineCopy, AiOutlineInfoCircle } from "react-icons/ai"; // Importing the copy icon from React Icons
import NavBar from "../../../components/navbar/NavBar";
import Footer from "../../../components/footer/Footer";
import { Tooltip } from "@nextui-org/react";

export default function Page() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center bg-[#0b0b0b] font-RobotoMono mt-16 sm:mt-24 px-5">
        <p className="text-2xl md:text-4xl text-center text-white mb-3 md:mb-6">
          Guide: Create a Custom Chat Room
        </p>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-start sm:items-center gap-2">
            <div className="text-white text-sm translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <p>1</p>
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">
              {" "}
              Initialize a new AO process using aos.
            </div>
          </div>
          <Code
            content={`aos a-good-name`}
            copyToClipboard={copyToClipboard}
            copied={copied}
          />

          <div className="flex items-start sm:items-center gap-2">
            <div className="text-white text-sm translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <p>2</p>
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">
              Create a chatroom.lua file in the same directory with this
              contents.
            </div>
          </div>

          <p className="text-white text-lg">Sample chatroom.lua:</p>
          <Code
            content={`local bint = require('.bint')(256)

              if not Members then Members = {} end
              
              local bint = require('.bint')(256)
              local ao = require('ao')
              
              if not Balances then Balances = { [ao.id] = tostring(bint(10000 * 1e12)) } end
              
              if Name ~= 'Olive Coin' then Name = 'Olive Coin' end
              
              if Ticker ~= 'OLVE' then Ticker = 'OLVE' end
              
              if Denomination ~= 12 then Denomination = 12 end
              
              -- change the logo
              if not Logo then Logo = 'SBCCXwwecBlDqRLUjb8dYABExTJXLieawf7m2aBJ-KY' end
              
              if not _0RBIT then _0RBIT = "FhSLmMjGDQrTYRZysLC6NasIVDQdxQ_kcBHsevdOnN4" end
              
              if not Bot then
                  Bot = {
                      ["knowledge-bot"] = { Name = "Knowledge Bot", Description = "A bot that knows everything", sample = "EthMumbai kab hai?", json = {} },
                      ["weather-bot"] = { Name = "Weather Bot", Description = "Get You Weather from anywhere", sample = "Mumbai che havaaman kase aahe?" },
                      ["crypto-bot"] = { Name = "Crypto Bot", Description = "Track your portfolio with in depth analysis", sample = "What's the price for Ethereum right now?" },
              
                  }
              end
              
              local json = require('json')
              
              local function has_value(tab, val)
                  for index, value in ipairs(tab) do
                      if value == val then
                          return true
                      end
                  end
              
                  return false
              end
              
              Handlers.add('inboxCount', Handlers.utils.hasMatchingTag('Action', '#Inbox'), function(msg)
                  -- Assuming Inbox is an array containing the messages
                  local inboxCount = 0;
              
                  local i = 1;
                  for i = 1, #Inbox, 1 do
                      if Inbox[i].Tags.Action == "Chat" then
                          inboxCount = inboxCount + 1
                      end
                  end
              
              
                  -- Send the inbox count as a response
                  ao.send({
                      Target = msg.From,
                      Tags = { InboxCount = tostring(inboxCount) }
                  })
              end)
              
              
              
              
              
              Handlers.add('inboxMessage', Handlers.utils.hasMatchingTag('Action', 'CheckInbox'), function(msg)
                  local messages = {}
              
                  local k = 1
                  for i = 1, #Inbox, 1 do
                      if Inbox[i].Tags.Action == "Chat" then
                          messages[k] = Inbox[i]
                          k = k + 1
                      end
                  end
              
                  if (#messages == 0) then
                      ao.send({
                          Target = msg.From,
                          Tags = { Messages = "No Messages" }
                      })
                  end
              
                  ao.send({
                      Target = msg.From,
                      Tags = { Messages = json.encode(messages) }
                  })
              end)
              
              Handlers.add("message", Handlers.utils.hasMatchingTag("Action", "Chat"), function(msg)
                  if (has_value(Members, msg.From) == false) then
                      ao.send({
                          Target = msg.From,
                          Tags = { Success = false }
                      })
                      return
                  end
                  table.insert(Inbox, msg)
                  ao.send({
                      Target = msg.From,
                      Tags = { Success = true }
                  })
              end)
              
              Handlers.add("gating", Handlers.utils.hasMatchingTag("Action", "Register"), function(msg)
                  -- if Balances[msg.From] then
                  --     local balance = tonumber(Balances[msg.From])
                  --     if balance and balance > 999 then
                  table.insert(Members, msg.From)
                  ao.send({
                      Target = msg.From,
                      Tags = { Success = true }
                  })
                  --     end
                  -- else
                  --     ao.send({
                  --         Target = msg.From,
                  --         Tags = { Success = false }
                  --     })
                  -- end
              end)
              
              
              Handlers.add("pingpong", Handlers.utils.hasMatchingTag("Action", "Ping"), function(msg)
                  ao.send({
                      Target = msg.From,
                      Tags = {
                          Action = "Pong",
                          Data = "Pong!"
                      }
                  })
              end)
              
              Handlers.add("botCommand", Handlers.utils.hasMatchingTag("Action", "Bot"), function(msg)
                  local botUrl = "http://project-mh02.onrender.com/bot-message"
              
                  ao.send({
                      Target = _0RBIT,
                      Tags = {
                          Action = "Post-Real-Data",
                          Url = botUrl,
                          bot = msg.Tags.Bot,
                          Body = json.encode({
                              botHandle = msg.Tags.Handle,
                              message = msg.Tags.Message,
                          })
              
                      }
              
                  })
              end)
              
              
              
              
              
              
              Handlers.add("botRecieve", Handlers.utils.hasMatchingTag("Action", "Receive-data-feed"), function(msg)
                  msg.Tags.Action = "Chat"
                  table.insert(Inbox, msg)
              end)
              
              
              
              
              
              Handlers.add('info', Handlers.utils.hasMatchingTag('Action', 'Info'), function(msg)
                  ao.send({
                      Target = msg.From,
                      Name = Name,
                      Ticker = Ticker,
                      Logo = Logo,
                      Denomination = tostring(Denomination)
                  })
              end)
              
              
              Handlers.add('balance', Handlers.utils.hasMatchingTag('Action', 'Balance'), function(msg)
                  local bal = '0'
              
                  -- If not Target is provided, then return the Senders balance
                  if (msg.Tags.Target and Balances[msg.Tags.Target]) then
                      bal = Balances[msg.Tags.Target]
                  elseif Balances[msg.From] then
                      bal = Balances[msg.From]
                  end
              
                  ao.send({
                      Target = msg.From,
                      Balance = bal,
                      Ticker = Ticker,
                      Account = msg.Tags.Target or msg.From,
                      Data = bal
                  })
              end)
              
              
              Handlers.add('balances', Handlers.utils.hasMatchingTag('Action', 'Balances'),
                  function(msg) ao.send({ Target = msg.From, Data = json.encode(Balances) }) end)
              
              
              Handlers.add('transfer', Handlers.utils.hasMatchingTag('Action', 'Transfer'), function(msg)
                  assert(type(msg.Recipient) == 'string', 'Recipient is required!')
                  assert(type(msg.Quantity) == 'string', 'Quantity is required!')
                  assert(bint.__lt(0, bint(msg.Quantity)), 'Quantity must be greater than 0')
              
                  if not Balances[msg.From] then Balances[msg.From] = "0" end
                  if not Balances[msg.Recipient] then Balances[msg.Recipient] = "0" end
              
                  local qty = bint(msg.Quantity)
                  local balance = bint(Balances[msg.From])
                  if bint.__le(qty, balance) then
                      Balances[msg.From] = tostring(bint.__sub(balance, qty))
                      Balances[msg.Recipient] = tostring(bint.__add(Balances[msg.Recipient], qty))
              
                      --[[
                         Only send the notifications to the Sender and Recipient
                         if the Cast tag is not set on the Transfer message
                       ]]
                      --
                      if not msg.Cast then
                          -- Send Debit-Notice to the Sender
                          ao.send({
                              Target = msg.From,
                              Action = 'Debit-Notice',
                              Recipient = msg.Recipient,
                              Quantity = tostring(qty),
                              Data = Colors.gray ..
                                  "You transferred " ..
                                  Colors.blue .. msg.Quantity .. Colors.gray .. " to " .. Colors.green .. msg.Recipient .. Colors
                                  .reset
                          })
                          -- Send Credit-Notice to the Recipient
                          ao.send({
                              Target = msg.Recipient,
                              Action = 'Credit-Notice',
                              Sender = msg.From,
                              Quantity = tostring(qty),
                              Data = Colors.gray ..
                                  "You received " ..
                                  Colors.blue .. msg.Quantity .. Colors.gray .. " from " .. Colors.green .. msg.From .. Colors.reset
                          })
                      end
                  else
                      ao.send({
                          Target = msg.From,
                          Action = 'Transfer-Error',
                          ['Message-Id'] = msg.Id,
                          Error = 'Insufficient Balance!'
                      })
                  end
              end)
              
              
              Handlers.add('mint', Handlers.utils.hasMatchingTag('Action', 'Mint'), function(msg)
                  assert(type(msg.Quantity) == 'string', 'Quantity is required!')
                  assert(bint.__lt(0, msg.Quantity), 'Quantity must be greater than zero!')
              
                  if not Balances[ao.id] then Balances[ao.id] = "0" end
              
                  if msg.From == ao.id then
                      -- Add tokens to the token pool, according to Quantity
                      Balances[msg.From] = tostring(bint.__add(Balances[Owner], msg.Quantity))
                      ao.send({
                          Target = msg.From,
                          Data = Colors.gray .. "Successfully minted " .. Colors.blue .. msg.Quantity .. Colors.reset
                      })
                  else
                      ao.send({
                          Target = msg.From,
                          Action = 'Mint-Error',
                          ['Message-Id'] = msg.Id,
                          Error = 'Only the Process Owner can mint new ' .. Ticker .. ' tokens!'
                      })
                  end
              end)
              
              
              
              Handlers.add(
                  "CronTick",
                  Handlers.utils.hasMatchingTag("Action", "Cron"),
                  function()
                      if not Balances[ao.id] then Balances[ao.id] = "0" end
              
                      if (Balances[ao.id]) < tostring(bint(10 * 1e12)) then
                          Balances[ao.id] = tostring(bint.__add(Balances[Owner], msg.Quantity))
                      end
                  end
              )
              
              
              Handlers.add(
                  "GetTokens",
                  Handlers.utils.hasMatchingTag("Action", "TokenRequest"),
                  function(msg)
                      -- if not Balances[ao.id] then Balances[ao.id] = tostring(bint(10000 * 1e12)) end
              
                      ao.send({
                          Target = ao.id,
                          Action = "Transfer",
                          Recipient = msg.From,
                          Quantity = 1000,
                      })
                  end
              )
              
              
              
              Handlers.add('GetBots', Handlers.utils.hasMatchingTag('Action', 'GetBots'), function(msg)
                  Send({
                      Target = msg.From,
                      Tags = {
                          Data = json.encode(Bot)
                      }
                  })
              end)
              
              
              
              Handlers.add('AddBot', Handlers.utils.hasMatchingTag('Action', 'AddBot'), function(msg)
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
              
              
              
              MessagesTempVar = {}
              for i = 1, 4, 1 do
                  if Inbox[i] and Inbox[i].Tags.Action == "Chat" then
                      table.insert(MessagesTempVar, Inbox[i])
                  end
              end
              `}
            copyToClipboard={copyToClipboard}
            copied={copied}
          />

          <div className="flex items-start sm:items-center gap-2">
            <div className="text-white text-sm hover:chaipenenk translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <p>3</p>
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">
              Load the chatroom.lua file into the AO process.
            </div>
          </div>
          <Code
            content={`.load chatroom.lua`}
            copyToClipboard={copyToClipboard}
            copied={copied}
          />
          <div className="flex items-start sm:items-center gap-2">
            <div className="text-white text-sm hover:chaipenenk translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <p>4</p>
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">
              Copy the process id and add it to your chatlist
            </div>
          </div>
          <Code
            content={`ao.id`}
            copyToClipboard={copyToClipboard}
            copied={copied}
          />
          <div className="flex items-start sm:items-center gap-2 my-8 mb-12">
            <div className="text-white text-sm hover:chaipenenk translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <AiOutlineInfoCircle />
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">
              You can also customize the Chatroom.lua file to create your own custom Chatrooms
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Code({ content, copyToClipboard, copied }) {
  return (
    <div className="text-white bg-[#0e0e0e] rounded-md p-8 max-w-[300px] mx-auto md:max-w-lg md:min-w-[500px] relative">
      <Tooltip content="copy to clipboard">
        <button
          className="absolute top-2 right-2 bg-[rgb(149, 164, 252)] text-white px-2 py-1 rounded"
          onClick={() => copyToClipboard(content)}
        >
          {copied ? "Copied!" : <AiOutlineCopy />}
        </button>
      </Tooltip>
      <pre className="overflow-x-scroll custom-scrollbar">
        <code>{content}</code>
      </pre>
    </div>
  );
}
