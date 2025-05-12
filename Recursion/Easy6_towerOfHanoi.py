def TowerofHanoi(n, source, middle, destination):
    if(n==1):
        print(f"Move the {n}th disk from {source} to {destination}")
        return
    
    TowerofHanoi(n-1, source, destination, middle)

    print(f"Move the {n}th disk from {source} to {destination}")

    TowerofHanoi(n-1, middle, source, destination)


TowerofHanoi(3, "S", "M", "D")