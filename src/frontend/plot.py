import matplotlib.pyplot as plt
import numpy as np

# Number of threads used
num_threads = [1, 2, 4, 6, 8, 10, 12, 14, 16]

# Sequential execution time (in seconds)
sequential_time = 100

# Execution times for parallel implementations (in seconds)
parallel_times = {
    '1D Row-wise': [90, 50, 30, 25, 20, 18, 17, 16, 15],
    '1D Column-wise': [95, 55, 35, 30, 25, 20, 18, 17, 16],
    '2D Row-block': [85, 45, 25, 20, 18, 15, 14, 13, 12],
    '2D Column-block': [80, 40, 20, 15, 12, 10, 9, 8, 7],
    'OpenMP Construct': [75, 35, 15, 12, 10, 8, 7, 6, 5]
}

# Calculate speedup for each parallel implementation
speedup = {}
for method, times in parallel_times.items():
    speedup[method] = [sequential_time / t for t in times]

# Plot the speedup for each parallel implementation
plt.figure(figsize=(10, 6))
for method, sp in speedup.items():
    plt.plot(num_threads, sp, label=method)

plt.title('Speedup Comparison for Different Parallelization Methods')
plt.xlabel('Number of Threads')
plt.ylabel('Speedup')
plt.xticks(num_threads)
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.savefig('speedup_plot.png')
plt.show()
# print("Hello, hi!")