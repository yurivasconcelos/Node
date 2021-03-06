
//aggregate -- every aggregate must have an _id
db.users.aggregate([
    { $match: { name: "Mariana" } },
    { $group: { _id: "$name", total: { $sum: "$age" } } }
])



//sort
//For the field or fields to sort by, set the sort order to 1 or -1 to specify an ascending or descending sort

db.users.aggregate([
    { $sort: { age: -1 } }
])