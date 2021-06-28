var map = new maptalks.Map("map",{
     center:     [180,0],
     zoom:  4,
     baseLayer : new maptalks.TileLayer("base",{
         urlTemplate:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
         subdomains:['a','b','c']
     }),
     layers : [
         new maptalks.VectorLayer('v', [new maptalks.Marker([180, 0])])
     ]
})