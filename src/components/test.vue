methods: {
  open_add_goods() {
      this.add_goods_switch = add_goods
  },
  close_add_goods() {
      this.add_goods_switch = null

  },
  item_update() {
      var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
          goods_list: []
      }
      this.items = goods_data_arr.goods_list.reverse()
  },
  goods_edit(event) {
      var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
          goods_list: []
      }
      console.log(event.target.id)
      goods_data_arr.goods_list[event.target.id - 1].editing = !goods_data_arr.goods_list[event.target.id - 1].editing;
      localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
      this.items = goods_data_arr.goods_list.reverse()

  },
  goods_edit_finish(goods_id, name, price, date, buyer) {
      var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
          goods_list: []
      }

      this.edit_name != null ? goods_data_arr.goods_list[goods.id - 1].name = this.edit_name : name
      this.edit_price != null ? goods_data_arr.goods_list[goods.id - 1].price = this.edit_price : price
      this.edit_date != null ? edit_goods_data_arr.goods_list[goods.id - 1].date = this.edit_date : date
      this.edit_buyer != null ? edit_goods_data_arr.goods_list[goods.id - 1].buyer = this.edit_buyer : buyer
      goods_data_arr.goods_list[goods_id - 1].editing = !goods_data_arr.goods_list[goods_id - 1].editing;

      localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
      var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
          goods_list: []
      }
      this.items = goods_data_arr.goods_list.reverse()
      this.edit_name = null
      this.edit_price = null
      this.edit_date = null
      this.edit_buyer = null
  },
  delete_goods(event) {
      var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
          goods_list: []
      }
      goods_data_arr.goods_list.splice(event.target.id - 1, 1);
      localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
      this.items = goods_data_arr.goods_list.reverse()
  },
  cancel_edit_mode(goods_id) {
      var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
          goods_list: []
      }
      goods_data_arr.goods_list[goods_id - 1].editing = !goods_data_arr.goods_list[goods_id - 1].editing;
      localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
      this.items = goods_data_arr.goods_list.reverse()
  }

},
<template></template>