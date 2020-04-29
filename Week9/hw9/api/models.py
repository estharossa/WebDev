from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField()
    description = models.TextField(default='Product descriptions')
    count = models.IntegerField(default=10)
    # category_id = models.IntegerField(default=1)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            # 'category_id': self.category_id
        }
