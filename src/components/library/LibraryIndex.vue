<!--图书管理页面主要布局-->
<template>
  <el-container>
    <!--    侧边栏容器-->
    <el-aside id="left-aside" width="15%">
      <SideMenu/>
    </el-aside>
    <!--    主要区域容器-->
    <el-main style="margin-top: 20px;">
      <Books class="books-area"/>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from '@/components/library/SideMenu'
import Books from '@/components/library/Books'
export default {
  name: 'LibraryIndex',
  components: { Books, SideMenu }
}
</script>

<style scoped>
.books-area{
  margin: 0 auto;
}
</style>
