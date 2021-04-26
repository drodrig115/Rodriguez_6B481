//use the shard connectivity functions

function botReconnect(Client client){//function botReconnect

	if (shardError(client.shardID)){//verify error

		client.shardID.Reconnect();

		while (shardReconnecting(client.shardID)){//monitor reconnecting process

			if (shardResume(client.shardID) && shardReady(client.shardID)){//if shard is Ready and has Resumed activity

				return;

			}//if shard is Ready and has Resumed activity
		}//monitor reconnecting process
	}//verify error
}//function botReconnect