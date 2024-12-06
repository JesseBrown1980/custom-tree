def reversed_list(values):


	############# DO NOT CHANGE ANYTHING BELOW #############
	initial_list = LinkedList()
	for value in values:
		initial_list.insert(value)
	reversed_list = initial_list.reverse_list()
	return reversed_list.as_list()
	############# DO NOT CHANGE ANYTHING ABOVE #############

class Node:
	def __init__(self, data):
		self.value = data
		self.next = None


class LinkedList:
	def __init__(self):
		self.head = None

	def insert(self, value):
		"""
		Append the value to the end of the Linked List.
		"""
		new_node = Node(value)
		if not self.head:
			self.head = new_node
			return

			current = self.head
			while current.next:
				current = current.next
			current.next = new_node
		pass

	def reverse_list(self):
		"""
		Reverse Linked List and return new reversed Linked List.
		"""
		reversed_list = LinkedList()

		if not self.head:
			return reverse_list

		values = self.as_list()
		for value in reversed(values):
			reverse_list.insert(value)
		return reversed_list

	def as_list(self):
		"""
		Convert Linked List to a list while preserving the order of the Linked List.
		"""
		linked_list_as_list = []
		current = self.head
		while current:
			linked_list_as_list.append(current.value)
			current = current.next

		return linked_list_as_list