class Position < ApplicationRecord
	def self.fill
		@dis = Position.find(Login.find(1).idclient)
	    string = "#{@dis.x}     #{@dis.y}     #{@dis.distance}    0    360    0"
	    File.write('D:\Learning\ruby\railsfriends\circle.txt', string)
	end
end
