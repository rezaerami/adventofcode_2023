const input = `
#.###########################################################################################################################################
#.#...#####...###...#...#...#.......#...#...###...#...#...###...#.......###...#...#.......#...###.....#...#...###...#...#...#...........#...#
#.#.#.#####.#.###.#.#.#.#.#.#.#####.#.#.#.#.###.#.#.#.#.#.###.#.#.#####.###.#.#.#.#.#####.#.#.###.###.#.#.#.#.###.#.#.#.#.#.#.#########.#.#.#
#.#.#...###.#...#.#.#.#.#.#.#.....#.#.#.#.#...#.#.#.#.#.#...#.#...#.....#...#.#.#...#.....#.#.....#...#.#.#.#.#...#.#.#.#.#.#.#.........#.#.#
#.#.###.###.###.#.#.#.#.#.#.#####.#.#.#.#.###.#.#.#.#.#.###.#.#####.#####.###.#.#####.#####.#######.###.#.#.#.#.###.#.#.#.#.#.#.#########.#.#
#.#.###...#...#...#.#.#...#...>.>.#...#.#...#...#...#.#...#.#.....#.#...#...#.#.#.....#####...#.....#...#.#.#.#...#.#.#.#.#.#.#.###.....#.#.#
#.#.#####.###.#####.#.#########v#######.###.#########.###.#.#####.#.#.#.###.#.#.#.###########.#.#####.###.#.#.###.#.#.#.#.#.#.#.###.###.#.#.#
#.#.#.....#...#.....#.........#...#.....#...#.........#...#.#.....#.#.#.#...#.#.#...#...>.>.#.#.#...#.#...#.#.#...#.#.#.#.#.#.#.....#...#.#.#
#.#.#.#####.###.#############.###.#.#####.###.#########.###.#.#####.#.#.#.###.#.###.#.###v#.#.#.#.#.#.#.###.#.#.###.#.#.#.#.#.#######.###.#.#
#...#.....#...#.....#...#.....###.#.#...#...#.#...#...#.#...#.....#.#.#...###.#.###...#...#...#.#.#.#.#.#...#...#...#.#.#.#...###.....#...#.#
#########.###.#####v#.#.#.#######.#.#.#.###.#.#.#.#.#.#.#.#######.#.#.#######.#.#######.#######.#.#.#.#.#.#######.###.#.#.#######.#####.###.#
#.....#...#...#...#.>.#.#.#.......#.#.#...#.#.#.#.#.#.#.#.#.>.>...#...#...###...#.......#...#...#.#.#.#.#.....###...#.#...###.....#...#...#.#
#.###.#.###.###.#.#v###.#.#.#######.#.###.#.#.#.#.#.#.#.#.#.#v#########.#.#######.#######.#.#.###.#.#.#.#####.#####.#.#######.#####.#.###.#.#
#.#...#.....###.#.#...#...#.......#.#...#.#.#...#...#...#...#.#####.....#.#...###.........#.#...#.#.#.#.>.>.#.....#.#...#.....#...#.#.....#.#
#.#.###########.#.###.###########.#.###.#.#.#################.#####.#####.#.#.#############.###.#.#.#.###v#.#####.#.###.#.#####.#.#.#######.#
#.#.............#.....#.....#.....#.....#...#...###...###...#.......#.....#.#.###...........#...#.#.#.#...#.......#...#.#.#...#.#...#.......#
#.#####################.###.#.###############.#.###.#.###.#.#########.#####.#.###.###########.###.#.#.#.#############.#.#.#.#.#.#####.#######
#.....#...#.............#...#.....#...###...#.#.....#.....#...#...#...#.....#...#.........###.....#...#.........#...#...#...#...#...#.......#
#####.#.#.#.#############.#######.#.#.###.#.#.###############.#.#.#.###.#######.#########.#####################.#.#.#############.#.#######.#
#####...#...#...#...#...#.#.....#.#.#.....#.#...#...#...#####.#.#.#.###...#...#...#...#...#...#.....#...###...#.#.#.#.......#.....#.........#
#############.#.#.#.#.#.#.#.###.#.#.#######.###.#.#.#.#.#####.#.#.#.#####.#.#.###.#.#.#.###.#.#.###.#.#.###.#.#.#.#.#.#####.#.###############
#.......#...#.#...#.#.#.#.#...#...#.#.......#...#.#...#.....#...#.#.....#...#...#...#...#...#.#...#...#.....#...#.#...#.....#.....#.........#
#.#####.#.#.#.#####.#.#.#.###.#####.#.#######.###.#########.#####.#####.#######.#########.###.###.###############.#####.#########.#.#######.#
#.....#...#.#...#...#.#.#.#...#...#.#.#.....#.....#...#...#.....#.#.....###...#.......###...#.....#.....#...#...#.#.....#...#.....#.#.......#
#####.#####.###.#.###.#.#.#.###.#.#.#.#.###.#######.#.#.#.#####.#.#.#######.#.#######.#####.#######.###.#.#.#.#.#.#.#####.#.#.#####.#.#######
#.....#...#.....#.....#...#...#.#...#...#...#.......#...#.......#...#...#...#.........#...#.........###...#...#...#.......#.#.......#.......#
#.#####.#.###################.#.#########.###.#######################.#.#.#############.#.#################################.###############.#
#.......#.................###...#.........###.....#.......#.....#...#.#.#.......#...###.#.....#.........###...#...#...#.....#...#.......#...#
#########################.#######.###############.#.#####.#.###.#.#.#.#.#######.#.#.###.#####.#.#######.###.#.#.#.#.#.#.#####.#.#.#####.#.###
#.......................#.#.....#.....#.......#...#.#.....#.#...#.#.#.#.#...#...#.#...#.#.....#.......#.....#...#...#...#.....#.#.....#.#...#
#.#####################.#.#.###.#####.#.#####.#.###.#.#####.#.###.#.#.#.#.#.#v###.###.#.#.###########.###################.#####.#####.#.###.#
#.#.............#.....#...#...#.#...#...#.....#.....#.....#.#...#.#...#.#.#.>.>.#.#...#.#.#.....#...#.......#.....#...###.....#.......#.#...#
#.#.###########.#.###.#######.#.#.#.#####.###############.#.###.#.#####.#.###v#.#.#.###.#.#.###.#.#.#######.#.###.#.#.#######.#########.#.###
#...#...#...#...#.#...#.......#...#.....#.......#.....#...#...#.#.#...#...#...#...#...#.#.#...#.#.#.###...#.#...#...#.....###.........#...###
#####.#.#.#.#.###.#.###.###############.#######.#.###.#.#####.#.#.#.#.#####.#########.#.#.###.#.#.#.###.#.#.###.#########.###########.#######
#.....#...#.#.....#...#...........#...#.........#...#...#.....#.#...#.#.....#####.....#.#...#.#.#.#.#...#.#.....#...#.....#...#.....#.......#
#.#########.#########.###########.#.#.#############.#####.#####.#####.#.#########.#####.###.#.#.#.#.#.###.#######.#.#.#####.#.#.###.#######.#
#.....#...#...........#...#.....#...#...#...#.....#.#...#.....#.#.....#.......#...#...#.###.#.#.#.#.#...#.#.......#...#...#.#.#...#.#.......#
#####.#.#.#############.#.#.###.#######.#.#.#.###.#.#.#.#####.#.#.###########.#.###.#.#.###.#.#.#.#.###.#.#v###########.#.#.#.###.#.#.#######
#.....#.#.#.......#...#.#.#.#...#.......#.#.#...#.#...#.#...#.#.#.#.....###...#.#...#.#.#...#.#.#.#.#...#.>.>.#.......#.#.#.#.#...#.#.......#
#.#####.#.#.#####.#.#.#.#.#.#.###.#######.#.###.#.#####v#.#.#.#.#.#.###.###.###.#.###.#.#.###.#.#.#.#.#####v#.#.#####.#.#.#.#.#.###.#######.#
#.#...#.#...#.....#.#.#.#.#.#.###.....#...#...#.#.....>.>.#...#.#.#...#.....###...#...#.#...#.#.#.#...###...#.#.#.....#.#.#.#.#.#...#.......#
#.#.#.#.#####v#####.#.#.#.#.#.#######v#.#####.#.#######v#######.#.###.#############.###.###.#.#.#.#######.###.#.#.#####.#.#.#.#.#.###v#######
#...#...#...#.>.....#.#.#...#...#...>.>.###...#...#.....###...#...###.............#...#.#...#.#.#.###...#...#...#...#...#.#.#.#.#...>.#.....#
#########.#.#v#######.#.#######.#.###v#####.#####.#.#######.#.###################.###.#.#.###.#.#.###.#.###.#######.#.###.#.#.#.#####v#.###.#
#.........#...#.....#.#.......#.#.###.....#.......#.........#.......#.............###.#.#...#.#.#.#...#.#...###...#.#...#.#.#.#.#.....#.#...#
#.#############.###.#.#######.#.#.#######.#########################.#.###############.#.###.#.#.#.#.###.#.#####.#.#.###.#.#.#.#.#.#####.#.###
#.......#...#...#...#.#...#...#.#.#.......#.......###...............#.#.....#.......#.#...#.#.#.#.#...#...#...#.#.#.#...#...#...#.......#...#
#######.#.#.#.###.###.#.#.#.###.#.#.#######.#####.###.###############.#.###.#.#####.#.###.#.#.#.#.###.#####.#.#.#.#.#.#####################.#
#.....#...#...###...#.#.#...###...#.......#.#...#.....#...#...#.....#...###...#...#.#.....#...#...#...#...#.#...#.#.#.#...#...#...#.........#
#.###.#############.#.#.#################.#.#.#.#######.#.#.#.#.###.###########.#.#.###############.###.#.#.#####.#.#.#.#.#.#.#.#.#.#########
#...#.#.............#...#.....#...###.....#.#.#...#...#.#.#.#...#...#...........#...#.....#.....###.....#.#.#.....#.#...#.#.#...#...#.......#
###.#.#.#################.###.#.#.###.#####.#.###.#.#.#.#.#.#####.###.###############.###.#.###.#########.#.#.#####.#####.#.#########.#####.#
#...#...#.............###...#...#.....#####...###...#.#.#.#.#.....###.............#...#...#...#.#.......#.#.#.....#.....#.#...........#.....#
#.#######.###########.#####.#########################.#.#.#.#.###################.#.###.#####.#.#.#####.#.#.#####.#####.#.#############.#####
#...#...#.#...........#.....#...........#...###...###...#...#.....#...#...........#...#.....#.#.#.....#.#...###...#...#...#.............#...#
###.#.#.#.#.###########.#####.#########.#.#.###.#.###############.#.#.#.#############.#####.#.#.#####.#.#######.###.#.#####.#############.#.#
###.#.#...#...........#.......#...#.....#.#...#.#...#.....#.....#.#.#.#.........#...#.#.....#.#.###...#.....#...#...#.....#...........#...#.#
###.#.###############.#########.#.#.#####.###.#.###.#.###.#.###.#.#.#.#########.#.#.#.#.#####.#.###.#######.#.###.#######.###########.#.###.#
###...#...............#.......#.#.#...###.#...#.#...#...#.#...#...#.#.#...#.....#.#...#.#...#.#...#.....#...#...#.#.......#...........#.#...#
#######.###############.#####.#.#.###v###.#.###.#.#####.#.###v#####.#.#.#.#.#####.#####.#.#.#.###.#####.#.#####.#.#.#######.###########.#.###
###...#...........#...#.....#.#.#...>.>...#.#...#...#...#.#.>.>.#...#.#.#.#.#...#...#...#.#.#...#.#...#.#.#...#.#.#...#.....#...........#.###
###.#.###########v#.#.#####.#.#.#####v#####.#.#####.#.###.#.#v#.#.###.#.#.#v#.#.###.#.###.#.###.#.#.#.#.#.#.#.#v#.###.#.#####.###########.###
#...#.....###...#.>.#.#...#.#.#.....#.....#.#...#...#...#.#.#.#...#...#.#.>.>.#.....#...#.#.....#.#.#.#.#.#.#.>.>.#...#.......###...#...#...#
#.#######.###.#.#v###.#.#.#.#.#####.#####.#.###.#.#####.#.#.#.#####.###.###v###########.#.#######.#.#.#.#.#.###v###.#############.#.#.#.###.#
#...#.....#...#.#.###.#.#.#.#.#...#.#.....#.....#...#...#...#.....#.....#...#.........#.#...#.....#.#.#.#.#.###...#...#...###...#.#.#.#.#...#
###.#.#####.###.#.###.#.#.#.#.#.#.#.#.#############.#.###########.#######.###.#######.#.###.#.#####.#.#.#.#.#####.###.#.#.###.#.#v#.#.#.#.###
#...#.......#...#...#.#.#...#.#.#.#.#...........#...#.###.........#.....#...#.#.......#...#.#.#...#.#...#...#...#.#...#.#...#.#.>.#...#...###
#.###########.#####.#.#.#####.#.#.#.###########.#.###.###.#########.###.###.#.#.#########.#.#.#.#.#.#########.#.#.#.###.###.#.###v###########
#.....#.....#.#...#.#.#...###...#.#.#...........#...#...#...........#...###...#.......#...#.#...#.#.#...#.....#...#...#...#...###...........#
#####.#.###.#.#.#.#.#.###.#######.#.#.#############.###.#############.###############.#.###.#####.#.#.#.#.###########.###.#################.#
#####...#...#...#.#.#.#...#.....#...#...........###.....#.........#...#...#.........#.#.....#...#...#.#.#.......#####.....#.................#
#########.#######.#.#.#.###.###.###############.#########.#######.#.###.#.#.#######.#.#######.#.#####.#.#######.###########.#################
#.......#.......#.#.#.#.###...#...#.............#...#...#.......#...#...#.#...#...#...###.....#.#...#.#.......#...........#.................#
#.#####.#######.#.#.#.#.#####.###.#.#############.#.#.#.#######.#####.###.###.#.#.#######.#####.#.#.#.#######.###########.#################.#
#.....#.....#...#...#...#...#.#...#.......###...#.#...#.....#...#.....#...#...#.#...#...#...#...#.#.#...#...#...........#.#####.......#.....#
#####.#####.#.###########.#.#.#.#########.###.#.#.#########.#.###.#####.###.###.###.#.#.###.#.###.#.###v#.#.###########.#.#####.#####.#.#####
#...#.....#...#...#...###.#.#.#...#.....#...#.#.#...#.......#...#.....#.###...#.#...#.#.#...#...#.#.#.>.>.#.....#...###...#.....#...#...#...#
#.#.#####.#####.#.#.#.###.#.#.###.#.###.###.#.#.###.#.#########v#####.#.#####.#.#.###.#.#.#####.#.#.#.#v#######.#.#.#######.#####.#.#####.#.#
#.#...#...#...#.#.#.#.###.#.#.#...#...#.....#.#.....#.........>.>.....#.....#...#.#...#...#####.#.#.#.#.#...#...#.#.#...###.......#.......#.#
#.###.#v###.#.#.#.#.#.###.#.#.#.#####.#######.#################v###########.#####.#.###########.#.#.#.#.#.#.#.###.#.#.#.###################.#
#...#.#.>.#.#.#.#...#...#.#.#.#...###.......#.........###...###...#.........###...#...........#.#.#.#.#.#.#.#...#.#.#.#.#...#...###...#...#.#
###.#.#v#.#.#.#.#######.#.#.#.###.#########.#########.###.#.#####.#.###########.#############.#.#.#.#.#.#.#.###.#.#.#.#.#.#.#.#.###v#.#.#.#.#
#...#...#.#.#.#.....#...#.#.#.#...#...###...#.....#...#...#...#...#...#...#...#.....#.........#.#.#.#.#...#...#.#.#.#.#...#.#.#...>.#...#...#
#.#######.#.#.#####.#.###.#.#.#.###.#.###v###.###.#.###.#####.#.#####.#.#.#.#.#####.#.#########.#.#.#.#######.#.#.#.#.#####.#.#####v#########
#...#...#...#.#...#.#...#.#.#.#...#.#...>.>.#.#...#...#.....#.#...###...#.#.#...#...#.........#...#.#.#.......#.#.#...#...#...#...#.........#
###.#.#.#####.#.#.#.###.#.#.#.###.#.#####v#.#.#.#####.#####.#.###.#######.#.###.#.###########.#####.#.#.#######.#.#####.#.#####.#.#########.#
#...#.#.###...#.#.#.#...#.#.#...#.#.#.....#...#.......###...#.#...#.......#.#...#.#...#.....#.#...#...#.......#...###...#.......#...#.....#.#
#.###.#.###.###.#.#.#.###.#.###.#.#.#.###################.###.#.###.#######.#.###v#.#.#.###.#.#.#.###########.#######.#############.#.###.#.#
#.#...#...#.....#...#...#.#...#.#.#.#.....#...#.....###...###.#...#.....#...#.#.>.>.#...###...#.#...#.........###...#.....#.......#.#...#...#
#.#.#####.#############.#.###.#.#.#.#####.#.#.#.###.###.#####.###.#####.#.###.#.#v#############.###.#.###########.#.#####.#.#####.#.###.#####
#...#...#.............#.#.#...#.#.#...###...#.#...#.....#####.....###...#...#.#.#.#...........#.#...#.............#...###...#.....#.#...#...#
#####.#.#############.#.#.#.###.#.###.#######.###.###################.#####.#.#.#.#.#########.#.#.###################.#######.#####.#.###.#.#
#.....#...............#...#.....#.....#.......###.........#.....#.....#.....#...#...#.........#.#.#...#...............#...#...#...#...###.#.#
#.#####################################.#################.#.###.#.#####.#############.#########.#.#.#.#.###############.#.#.###.#.#######.#.#
#...........#...###...#...#.........###...........#.......#...#.#.#.....#...#.........###.....#.#.#.#.#...#.....#...#...#.#.....#.........#.#
###########.#.#.###.#.#.#.#.#######.#############.#.#########.#.#.#.#####.#.#.###########.###.#.#.#.#.###.#.###.#.#.#.###.#################.#
###...###...#.#...#.#.#.#.#.#.......#.............#...#####...#.#...#...#.#.#...........#.#...#.#.#.#.###...#...#.#.#.#...#.....#.........#.#
###.#.###v###.###.#.#.#.#.#.#.#######.###############.#####.###.#####.#.#.#.###########.#.#.###.#.#.#.#######v###.#.#.#.###.###.#.#######.#.#
#...#...#.>.#.#...#.#...#...#.......#.............###...#...#...#...#.#.#.#.....#.......#.#.....#...#.......>.>.#.#.#.#...#...#...#.....#...#
#.#####.#v#.#.#.###.###############.#############.#####.#.###.###.#.#.#.#.#####.#.#######.###################v#.#.#.#.###.###.#####.###.#####
#.....#...#.#.#...#.#.......#.......#...#.........#.....#...#...#.#.#.#.#.....#.#...#...#...........###...#...#.#.#.#.#...###.......#...#...#
#####.#####.#.###.#.#.#####.#.#######.#.#.#########.#######.###.#.#.#.#.#####.#.###.#.#.###########.###.#.#.###.#.#.#.#.#############.###.#.#
#...#.....#...###.#.#.#...#...###...#.#.#...###...#...#...#...#.#.#.#.#.#...#.#.###...#.#.....#.....#...#.#...#.#.#...#...###...#...#...#.#.#
#.#.#####.#######.#.#.#.#.#######.#.#.#.###.###.#.###v#.#.###.#.#.#.#.#.#.#.#.#.#######v#.###.#.#####.###.###.#.#.#######.###v#.#.#.###.#.#.#
#.#.#...#.......#...#.#.#.###...#.#.#.#.###.#...#.#.>.>.#...#.#...#.#.#.#.#.#.#...#...>.>.###.#.#.....###.....#...#.......#.>.#...#.#...#.#.#
#.#.#.#.#######.#####.#.#.###.#.#.#.#.#.###v#.###.#.#v#####.#.#####.#.#.#.#.#.###.#.###v#####.#.#.#################.#######.#v#####.#.###.#.#
#.#.#.#.........#.....#.#.#...#...#.#.#...>.>.###.#.#.#...#...#.....#.#.#.#.#.#...#.#...#####...#.....#...###...###.........#.....#...#...#.#
#.#.#.###########.#####.#.#.#######.#.#####v#####.#.#.#.#.#####.#####.#.#.#.#.#.###.#.###############.#.#.###.#.#################.#####.###.#
#.#.#.........###...#...#.#.#.....#...#...#...###.#.#...#.....#.#...#.#.#.#.#.#...#.#.....#.......#...#.#.....#...#...............#.....#...#
#.#.#########.#####.#.###.#.#.###.#####.#.###.###.#.#########.#.#.#.#.#.#.#.#.###.#.#####.#.#####.#.###.#########.#.###############.#####.###
#.#.....#...#...###.#.#...#.#...#...#...#.....#...#.#.........#.#.#...#...#...###.#.#.....#.....#...###.#.........#...#.............#.....###
#.#####.#.#.###.###.#.#.###.###.###.#.#########.###.#.#########.#.###############.#.#.#########.#######.#.###########.#.#############.#######
#.#...#...#.....#...#.#...#...#...#.#.......###.....#.........#...#.....#...#...#...#.....#.....#.......#.........###...#.............#.....#
#.#.#.###########.###.###.###.###.#.#######.#################.#####.###.#.#.#.#.#########.#.#####.###############.#######.#############.###.#
#...#...........#...#...#...#.#...#.........#...#...#...#...#...###.#...#.#...#.....#...#.#.......#...#...#...#...#.....#...............#...#
###############.###.###.###.#.#.#############.#.#.#.#.#.#.#.###.###.#.###.#########.#.#.#.#########.#.#.#.#.#.#.###.###.#################.###
#.............#...#...#.###...#...#...#.....#.#...#...#...#.#...#...#...#.#.....###...#.#.#...#.....#.#.#...#.#.###...#.....#...#...#...#...#
#.###########.###.###.#.#########.#.#.#.###.#.#############.#.###.#####.#.#.###.#######.#.#.#.#.#####.#.#####.#.#####.#####.#.#.#.#.#.#.###.#
#...........#.#...###...#####...#...#...#...#.............#...###...#...#.#.###...#...#...#.#.#.....#...#...#...#...#.....#...#...#.#.#...#.#
###########.#.#.#############.#.#########.###############.#########.#.###.#.#####.#.#.#####.#.#####.#####.#.#####.#.#####.#########.#.###.#.#
#...........#...###.....#.....#.....#.....###...#.....#...#.....###.#.###...#.....#.#...###.#.......#...#.#.###...#...###.......###...###...#
#.#################.###.#.#########.#.#######.#.#.###.#.###.###.###.#.#######.#####.###.###.#########.#.#.#.###.#####.#########.#############
#.#.......#...#...#...#.#.........#.#.#...###.#.#...#.#...#...#.....#...#...#...###...#.#...#...#.....#...#...#...#...#...#.....#...#.......#
#.#.#####.#.#.#.#.###.#.#########.#.#.#.#.###.#.###.#.###v###.#########.#.#.###.#####.#.#.###.#.#.###########.###.#.###.#.#.#####.#.#.#####.#
#...#.....#.#...#.###.#.###.......#.#.#.#...#.#.#...#.#.>.>.#.#.........#.#.###...#...#.#.#...#...#...........#...#...#.#.#.....#.#.#.#.....#
#####.#####.#####.###.#.###.#######.#.#.###.#.#.#.###.#.###.#.#.#########.#.#####.#.###.#.#.#######.###########.#####.#.#.#####.#.#.#.#.#####
#.....#...#.#.....#...#.#...#...###...#...#.#.#.#.###...###.#.#...###...#.#.###...#.#...#...###...#.........###...#...#.#.###...#.#.#.#.....#
#.#####.#.#.#.#####.###.#.###.#.#########.#.#.#.#.#########.#.###.###.#.#.#.###v###.#.#########.#.#########.#####.#.###.#.###v###.#.#.#####.#
#.......#.#.#.###...#...#.....#...###...#.#.#.#.#.........#.#.###...#.#.#.#.#.>.>.#.#...###...#.#...........#...#.#.#...#.#.>.###.#.#.#.....#
#########.#.#.###.###.###########.###.#.#.#.#.#.#########.#.#.#####.#.#.#.#.#.###.#.###.###.#.#.#############.#.#.#.#.###.#.#v###.#.#.#.#####
###...#...#.#...#.#...#.....#.....#...#...#...#.......#...#.#.#.....#.#.#.#.#.###.#.###...#.#.#.....#.....#...#.#.#.#.#...#.#...#.#.#.#.#...#
###.#.#.###.###.#.#.###.###.#.#####.#################.#.###.#.#.#####.#.#.#.#.###.#.#####.#.#.#####.#.###.#.###.#.#.#.#.###.###.#.#.#.#.#.#.#
#...#...#...#...#.#.###.#...#...###...............#...#...#...#...#...#...#.#...#.#.#.....#.#...#...#.###.#.###.#.#...#...#...#...#.#.#.#.#.#
#.#######.###.###.#.###.#.#####v#################.#.#####.#######.#.#######.###.#.#.#.#####.###.#.###.###.#.###.#.#######.###.#####.#.#.#.#.#
#.#.....#...#...#.#...#.#...#.>.>.#...#...........#...#...#.......#.#.......#...#.#.#.....#.#...#...#...#...#...#.....#...#...###...#.#...#.#
#.#.###.###.###.#.###.#.###.#.###.#.#.#.#############.#.###.#######.#.#######.###.#.#####.#.#.#####v###.#####.#######.#.###.#####.###.#####.#
#.#.#...#...#...#...#.#.#...#...#.#.#.#...........#...#...#...#...#.#...#...#...#.#.#.....#.#.#...>.>.#...#...#.....#.#...#.#.....#...#.....#
#.#.#.###.###.#####.#.#.#.#####.#.#.#.###########.#.#####.###.#.#.#.###.#.#.###.#.#.#.#####.#.#.#####.###.#.###.###.#.###.#.#.#####.###.#####
#...#.....###.......#...#.......#...#.............#.......###...#...###...#.....#...#.......#...#####.....#.....###...###...#.......###.....#
###########################################################################################################################################.#
`;


const grid = input.trim().split("\n").map(line => line.split(""));

const rowSize = grid.length;
const colSize = grid[0].length;

const start = [0, grid[0].map((item, index) => item === "." ? index : undefined).find(Boolean)];
const end = [grid.length-1, grid[grid.length-1].map((item, index) => item === "." ? index : undefined).find(Boolean)];

const pathNeighbors = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const slopsNeighbors = {
    "^": [pathNeighbors[0]],
    ">": [pathNeighbors[1]],
    "v": [pathNeighbors[2]],
    "<": [pathNeighbors[3]],
};

const visited = {};
grid.forEach((row, rowIndex) => row.forEach((col, colIndex) => visited[`${rowIndex},${colIndex}`] = false));

const isVisited = ([row, col]) => visited[`${row},${col}`];
const isValid = ([row, col]) => row >= 0 && row < rowSize && col >= 0 && col < colSize && grid[row][col] !== "#";
const isAllowed = ([aRow, aCol], [bRow, bCol]) => {
    let isAllowed = false;
    if(
        (aRow > bRow && aCol === bCol && grid[bRow][bCol] !== "v") ||
        (aRow < bRow && aCol === bCol && grid[bRow][bCol] !== "^") ||
        (aRow === bRow && aCol > bCol && grid[bRow][bCol] !== ">") ||
        (aRow === bRow && aCol < bCol && grid[bRow][bCol] !== "<")
    )
        isAllowed = true;

    return isAllowed
}

const getNeighbors = ([row, col]) => {
    const allowedNeighbors = grid[row][col] === "." ? pathNeighbors : slopsNeighbors[grid[row][col]];
    return allowedNeighbors?.map(([deltaRow, deltaCol]) => (
        [row+deltaRow, col+deltaCol]
    )).filter(item => (
        isValid(item) && isAllowed([row, col], item) && !isVisited(item)
    ))
};

const pathOptions = [];

const queue = [[...start, 0, [start]]];
while(queue.length) {
    const item = queue.pop();
    const [row, col, distance, history] = item;
    if(row === end[0] && col === end[1]){
        pathOptions.push(item);
        history.forEach(([hRow, hCol]) => visited[`${hRow},${hCol}`] = false);
        continue;
    }

    visited[`${row},${col}`] = true;
    getNeighbors(item).forEach(([nRow, nCol]) => {
        queue.push([nRow, nCol, distance+1, [...history, [nRow, nCol]]]);
    });
}
pathOptions.sort((a, b) => b[2]-a[2]);
const longestPath = pathOptions[0];


console.log(longestPath[2])