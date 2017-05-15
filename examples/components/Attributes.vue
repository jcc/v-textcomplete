<template>
  <div class="row">
    <div class="blocks">
      <h3 class="text-center mt-5">Attributes</h3>
      <div class="block">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Param</th>
              <th>Comment</th>
              <th>Type</th>
              <th>Optional</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>strategies</td>
              <td>Customize automatic matching strategy.</td>
              <td>Array</td>
              <td>customize</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>selectedDefaultFirst</td>
              <td>Determine whether to set the default for   the first item.</td>
              <td>Boolean</td>
              <td>true, false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>areaClass</td>
              <td>Textarea class</td>
              <td>String</td>
              <td>customize</td>
              <td>null</td>
            </tr>
            <tr>
              <td>lineHeight</td>
              <td>Textarea line-height style.</td>
              <td>Number</td>
              <td>customize</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
