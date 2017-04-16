class Cell:
    def __init__(self):
        self.alive = True

    def next_state(self, neighbor_count):
        if neighbor_count < 2:
            future_alive = False
        elif neighbor_count > 3:
            future_alive = False
        else future_alive = self.alive


class World:


class Tick:
    
