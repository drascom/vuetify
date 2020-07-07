<template>
<v-card class="mx-auto col-sm-6">
    <v-card-title>Upload New Photos
    </v-card-title>

    <VueFileAgent
        ref="vueFileAgent"
        :theme="'list'"
        :multiple="true"
        :editable="true"
        :deletable="true"
        :meta="true"
        :accept="'image/*,.zip'"
        :maxSize="'10MB'"
        :maxFiles="14"
        :helpText="'Choose images or zip files'"
        :errorText="{
        type: 'Invalid file type. Only images or zip Allowed',
        size: 'Files should not exceed 10MB in size'
      }"
        @select="uploadFiles(customerId)"
        @upload="uploadedEvent('upload', $event)"
        @upload:error="uploadedEvent('upload:error', $event)"
        @beforedelete="onBeforeDelete($event)"
        @delete="fileDeleted($event)"
        v-model="fileRecords" />

</v-card>
</template>

<script>
import album from "@/components/gallery";

export default {
    data: function () {
        return {
            fileRecords: [],
            uploadUrl: process.env.VUE_APP_UPLOAD_URL,
            uploadHeaders: [],
            fileRecords: []
        };
    },
    props: {
        customerId: {
            type: String,
            default: "0"
        }
    },
    components: {
        album
    },
    methods: {
        uploadFiles: function (customerId) {
            this.$refs.vueFileAgent.upload(
                this.uploadUrl,
                this.uploadHeaders,
                this.fileRecords,
                function createFormData(fileData) {
                    var formData = new FormData();
                    formData.append("id", customerId);
                    formData.append("file", fileData.file);
                    return formData;
                }
            );
            console.log("uploadFiles bitti");
        },
        deleteUploadedFile: function (fileRecord) {
            // Using the default uploader. You may use another uploader instead.
            this.$refs.vueFileAgent.deleteUpload(
                this.uploadUrl,
                this.uploadHeaders,
                fileRecord
            );
        },
        filesSelected: function (fileRecordsNewlySelected) {
            var validFileRecords = fileRecordsNewlySelected.filter(
                fileRecord => !fileRecord.error
            );
            this.fileRecords = this.fileRecords.concat(validFileRecords);
        },
        onBeforeDelete: function (fileRecord) {
            var i = this.fileRecords.indexOf(fileRecord);
            if (i !== -1) {
                this.fileRecords.splice(i, 1);
            } else {
                this.openConfirm(fileRecord);
            }
        },
        deleteFile(fileRecord) {
            console.log(fileRecord);
            let name = fileRecord.upload.data.filename;
            this.$refs.vueFileAgent.deleteFileRecord(fileRecord);
            // silindi dialog
        },
        fileDeleted: function (fileRecord) {
            var i = this.fileRecords.indexOf(fileRecord);
            if (i !== -1) {
                this.fileRecords.splice(i, 1);
            } else {
                this.deleteUploadedFile(fileRecord);
            }
        },
        uploadedEvent(eventName, event) {
            console.log("upload event başladı");
            var firstCount = Object.keys(this.fileRecords).length;
            var files = Array.isArray(event) ? event : [event];
            for (var file of files) {
                var fileRecord = file.fileRecord;
                if (!fileRecord.error) {
                    this.$emit("uploadComplete", true);
                } else {
                    // hata dialog fileRecord.error, kullan
                }

                var index = this.fileRecords.indexOf(fileRecord);
                this.fileRecords.splice(index, 1);
            }
            var LastCount = Object.keys(this.fileRecords).length;
            if (LastCount <= 0) {
                //tamamlandı dialog
            }
            console.log("upload Event  bitti");
        },
        openConfirm(fileRecord) {
            //silme dialog
        }
    }
};
</script>

<style lang="scss" scoped>
a img {
    border-radius: 10px;
    position: relative;
}
</style>
