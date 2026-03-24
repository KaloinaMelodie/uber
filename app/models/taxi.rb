class Taxi < ApplicationRecord
	def self.fill
		@list=Taxi.all
	    str=""
	    @list.each do |each|
	      str = str+ "#{each.x}     #{each.y} \n"
	    end
	    File.write('D:\Learning\ruby\railsfriends\points.txt', str)
	end
end
