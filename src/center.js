var map = new maptalks.Map("map",{
    center:     [400,0],
    zoom:  5,
    baseLayer : new maptalks.TileLayer("base",{
        urlTemplate:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        subdomains:['a','b','c']
    }),
    layers : [
        new maptalks.VectorLayer('v', [new maptalks.Marker([400, 0])])
    ]
})